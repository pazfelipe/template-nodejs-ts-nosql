import { GeneralError } from './../utils/general';
import { ExampleDto } from './../interfaces/example';
import ExampleModel from '../models/example';

export const exampleCreate = async (
  data: ExampleDto,
): Promise<{ message: string }> => {
  if (!data.name) {
    GeneralError(400, 'Campo name é obrigatório');
  }

  const register = {
    name: data.name,
    date: new Date(),
  };

  try {
    const model = new ExampleModel();
    await model.insert(register);

    return { message: 'Registro criado com sucesso' };
  } catch (error) {
    GeneralError(500, error);
  }
};
