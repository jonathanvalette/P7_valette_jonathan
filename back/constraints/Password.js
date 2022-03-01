const passwordValidator = require('password-validator');                      // Importation du package password-validator

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(6)                                                                  // La longueur minimale du mdp est de 6 caractères
.is().max(24)                                                                 // La longueur maximale du mdp est de 24 caractères
      // Exclusion de mdp trop simples

module.exports = passwordSchema;