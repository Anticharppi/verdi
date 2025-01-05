import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import { join } from "path";
//#region types
type City = {
  cod_mpio: string;
  nom_mpio: string;
  cod_depto: string;
};

type Material = {
  name: string;
  code: string;
};

type State = {
  dpto: string;
  cod_depto: string;
};
//#endregion

//#region constants
const prisma = new PrismaClient();
const citiesPath = join(__dirname, "..", "db", "data", "cities.json");
const statesPath = join(__dirname, "..", "db", "data", "states.json");
const materialsPath = join(__dirname, "..", "db", "data", "materials.json");
//#endregion

//#region seeders
const feedCities = async (cities: City[]) => {
  const existsCities = await prisma.city.count();
  if (existsCities) return;

  const states = await prisma.state.findMany();

  await prisma.city.createMany({
    data: cities.map((city) => {
      const state = states.find((state) => state.code === city.cod_depto);
      return {
        code: city.cod_mpio,
        name: city.nom_mpio,
        stateId: state.id,
      };
    }),
  });
};

const feedBaseMaterials = async (materials: Material[]) => {
  const existsBaseMaterials = await prisma.baseMaterial.count();
  if (existsBaseMaterials) return;
  await prisma.baseMaterial.createMany({
    data: materials,
  });
};

const feedStates = async (states: State[]) => {
  const existsStates = await prisma.state.count();
  if (existsStates) return;
  await prisma.state.createMany({
    data: states.map((state) => ({ name: state.dpto, code: state.cod_depto })),
  });
};

const feedDestinationTypes = async () => {
  const existsDestinationTypes = await prisma.state.count();
  if (existsDestinationTypes === 2) return;
  return prisma.destinationTypes.createMany({
    skipDuplicates: true,
    data: [
      {
        code: 1,
        name: "Sitio de disposición final con estación de transferencia",
      },
      {
        code: 2,
        name: "Sitio de disposición final sin estación de transferencia",
      },
    ],
  });
};
//#endregion

async function main() {
  const states = JSON.parse(readFileSync(statesPath, "utf-8"));
  console.log("Feeding states");
  await feedStates(states);
  console.log("Finish feeding states");

  const cities = JSON.parse(readFileSync(citiesPath, "utf-8"));
  console.log("Feeding cities");
  await feedCities(cities);
  console.log("Finish feeding cities");
  const materials = JSON.parse(readFileSync(materialsPath, "utf-8"));
  console.log("Feeding materials");
  await feedBaseMaterials(materials);
  console.log("Finish feeding materials");
  console.log("Feeding destination types");
  await feedDestinationTypes();
  console.log("Finish feeding destination types");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
