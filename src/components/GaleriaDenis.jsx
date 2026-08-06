import { useEffect, useMemo, useState } from "react";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { db } from "../firebase";

import dadosFotos from "./dadosFotos";

import HeroGaleria from "./HeroGaleria";
import EstatisticasGaleria from "./EstatisticasGaleria";
import BarraPesquisa from "./BarraPesquisa";
import Filtros from "./Filtros";
import CardFoto from "./CardFoto";
import ModalFoto from "./ModalFoto";

function GaleriaDenis() {

  const [curtidas, setCurtidas] = useState({});

  const [pesquisa, setPesquisa] = useState("");

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Todas");

  const [fotoAtual, setFotoAtual] =
    useState(null);

  /*
  ===========================
  Carrega Curtidas
  ===========================
  */

  useEffect(() => {

    carregarCurtidas();

  }, []);

  async function carregarCurtidas() {

    const resultado = {};

    for (const foto of dadosFotos) {

      const referencia = doc(
        db,
        "galeriaDenis",
        foto.id
      );

      const documento =
        await getDoc(referencia);

      if (documento.exists()) {

        resultado[foto.id] =
          documento.data().curtidas || 0;

      } else {

        await setDoc(referencia, {
          curtidas: 0,
        });

        resultado[foto.id] = 0;

      }

    }

    setCurtidas(resultado);

  }

  /*
  ===========================
  Curtidas
  ===========================
  */

  async function curtir(id) {

    const jaCurtiu =
      localStorage.getItem(
        `curtiu-${id}`
      );

    if (jaCurtiu) return;

    const referencia = doc(
      db,
      "galeriaDenis",
      id
    );

    const documento =
      await getDoc(referencia);

    if (documento.exists()) {

      await updateDoc(
        referencia,
        {
          curtidas: increment(1),
        }
      );

    } else {

      await setDoc(
        referencia,
        {
          curtidas: 1,
        }
      );

    }

    localStorage.setItem(
      `curtiu-${id}`,
      "true"
    );

    setCurtidas((atual) => ({
      ...atual,
      [id]: (atual[id] || 0) + 1,
    }));

  }

  /*
  ===========================
  Categorias
  ===========================
  */

  const categorias = [

    "Todas",

    ...new Set(

      dadosFotos.map(
        (foto) => foto.categoria
      )

    ),

  ];

  /*
  ===========================
  Pesquisa + Filtro
  ===========================
  */

  const fotosFiltradas = useMemo(() => {

    return dadosFotos.filter((foto) => {

      const categoriaValida =

        categoriaSelecionada === "Todas"

          ? true

          : foto.categoria ===
            categoriaSelecionada;

      const pesquisaValida =

        foto.titulo
          .toLowerCase()
          .includes(
            pesquisa.toLowerCase()
          ) ||

        foto.descricao
          .toLowerCase()
          .includes(
            pesquisa.toLowerCase()
          );

      return (
        categoriaValida &&
        pesquisaValida
      );

    });

  }, [

    pesquisa,

    categoriaSelecionada

  ]);

  /*
  ===========================
  Estatísticas
  ===========================
  */

  const totalCurtidas =

    Object.values(curtidas)

      .reduce(

        (total, numero) =>
          total + numero,

        0

      );

  /*
  ===========================
  Modal
  ===========================
  */

  function abrirFoto(foto) {

    setFotoAtual(foto);

  }

  function fecharFoto() {

    setFotoAtual(null);

  }

  function proximaFoto() {

    if (!fotoAtual) return;

    const indice =

      fotosFiltradas.findIndex(

        (foto) =>
          foto.id === fotoAtual.id

      );

    const proximo =

      (indice + 1) %

      fotosFiltradas.length;

    setFotoAtual(

      fotosFiltradas[proximo]

    );

  }

  function fotoAnterior() {

    if (!fotoAtual) return;

    const indice =

      fotosFiltradas.findIndex(

        (foto) =>
          foto.id === fotoAtual.id

      );

    const anterior =

      indice === 0

        ? fotosFiltradas.length - 1

        : indice - 1;

    setFotoAtual(

      fotosFiltradas[anterior]

    );

  }

  /*
  ===========================
  Render
  ===========================
  */

  return (

    <section
      className="
      py-24
      bg-slate-100
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >

        <HeroGaleria />

        <EstatisticasGaleria
          totalFotos={
            fotosFiltradas.length
          }
          totalCurtidas={
            totalCurtidas
          }
        />

        <BarraPesquisa
          pesquisa={pesquisa}
          setPesquisa={
            setPesquisa
          }
        />

        <Filtros
          categorias={categorias}
          categoriaSelecionada={
            categoriaSelecionada
          }
          setCategoriaSelecionada={
            setCategoriaSelecionada
          }
        />

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >

          {

            fotosFiltradas.map((foto) => (

              <CardFoto

                key={foto.id}

                foto={foto}

                curtidas={
                  curtidas[foto.id]
                }

                onCurtir={curtir}

                onAbrir={abrirFoto}

              />

            ))

          }

        </div>

        <ModalFoto

          aberto={
            fotoAtual !== null
          }

          foto={fotoAtual}

          fotos={fotosFiltradas}

          curtidas={
            fotoAtual
              ? curtidas[fotoAtual.id]
              : 0
          }

          onCurtir={curtir}

          onFechar={fecharFoto}

          onAnterior={
            fotoAnterior
          }

          onProxima={
            proximaFoto
          }

        />

      </div>

    </section>

  );

}

export default GaleriaDenis;