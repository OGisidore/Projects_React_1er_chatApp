import { User } from "../models/User";
import { profils } from "./profils";

// Création des utilisateurs à partir des profils
export const usersInfo: User[] = profils.map((profil) => {
    // Décomposition des données du profil
    const { _id, fullName, email, phone } = profil;
    
    // Séparation du nom complet en prénom et nom de famille
    const [firstName, lastName] = fullName.split(' ');
  
    // Génération d'un mot de passe aléatoire
    const password = Math.random().toString(36).substring(7);
  
    // Date actuelle pour les champs créés et mis à jour
    const currentDate = new Date();
  
    // Création de l'utilisateur avec les informations extraites
    const user: User = {
      _id,
      firstName,
      lastName,
      fullName,
      email,
      phone,
      profile: profil,
      password,
      created_at: currentDate,
      update_at: currentDate,
    };
  
    return user;
  });
  
  // Affichage des informations des utilisateurs
  // console.log(usersInfo);
  