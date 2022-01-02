import axios from 'axios';
import { noteEndpoints } from './../../constants/endpoints';
import { NoteType, UpdateNoteContentType } from '../../../lib/types/noteTypes';

//   save the current note to the database
//   should be called timely for autosave
//   should be called in the return of useEffect() so note gets saved when component dismounts
export const updateNoteContent = async (
  noteID: string,
  rawEditorContent: string
) => {
  try {
    const updateNoteData: UpdateNoteContentType = {
      content: rawEditorContent,
    };

    await axios.put(noteEndpoints.getOrUpdateOrDelete(noteID), updateNoteData);
  } catch (error) {
    console.log(error);
  }
};

// getting the content of the note and updates the Editor's state
export const getNote = async (noteID: string) => {
  try {
    const response = await axios.get(noteEndpoints.getOrUpdateOrDelete(noteID));
    const note: NoteType = response.data;

    return note;
  } catch (error) {
    console.log(error);
  }
};
