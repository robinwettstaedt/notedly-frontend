import { NotebookType } from './../../types/notebookTypes';
import { notebookEndpoints } from '../../constants/endpoints';
import { CreateNotebookType } from '../../types/notebookTypes';
import axios from 'axios';

export const createNotebook = async (title: string, color: string) => {
  try {
    const notebook: CreateNotebookType = {
      title,
      color,
    };

    console.log('notebookdata: ', notebook);

    const response = await axios.post(notebookEndpoints.createOrGetMany, {
      title: notebook.title,
      color: notebook.color,
    });

    console.log(response.data);

    const data = response.data;

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
