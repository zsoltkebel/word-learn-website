import { error } from '@sveltejs/kit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebaseConfig';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  if (params.id) {
    const deckID = params.id;

    const words = await getDocs(collection(db, 'folders', deckID, 'entries'),)

    return {
        deckID: params.id,
        words: words.docs,
    };
  }
 
  throw error(404, 'Not found');
}