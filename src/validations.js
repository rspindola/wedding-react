/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'Preencha esse campo para continuar'
  },
  string: {
    email: 'Preencha um e-mail válido',
    min: 'Valor muito curto (mínimo ${min} caracteres)',
    max: 'Valor muito longo (máximo ${max} caracteres)',
    length: 'Valor inválido (deve seguir (00) 00000-0000)'
  },
  number: {
    min: 'Valor inválido (deve ser maior ou igual a ${min})',
    max: 'Valor inválido (deve ser menor ou igual a ${max})'
  }
});

export default yup;