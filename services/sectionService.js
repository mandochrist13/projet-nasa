// Accesseur non utilise pour l'instant : les composants importent les donnees
// directement depuis src/app/data. Le chemin et le nom de l'export etaient
// tous deux errones ("../data/mid" et "midSection"), ce fichier aurait echoue
// a la premiere importation.
import { midsections } from "../src/app/data/mid";

export const getAllmidSection = () => {
  return midsections;
};
