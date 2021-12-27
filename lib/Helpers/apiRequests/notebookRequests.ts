import { NotebookType } from './../../types/notebookTypes';
import { notebookEndpoints } from '../../constants/endpoints';
import { CreateNotebookType } from '../../types/notebookTypes';

export const createNotebook = async (
  token: string,
  title: string,
  color: string
) => {
  try {
    const createNotebookData: CreateNotebookType = {
      title,
      color,
    };

    const response = await fetch(notebookEndpoints.createOrGetMany, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(createNotebookData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('error:', error);
  }
};

// export const getNotebooks = async (token: string) => {
//   try {
//     const response = await fetch(notebookEndpoints.createOrGetMany, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: token,
//       },
//     });

//     const data: NotebookType[] = await response.json();

//     return data;
//   } catch (error) {
//     console.log('error:', error);
//   }
// };
