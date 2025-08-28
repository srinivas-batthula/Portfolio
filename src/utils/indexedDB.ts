// utils/indexedDB.ts
import { openDB } from 'idb';
import { StoresMap } from '@/types';

const DB_NAME = 'portfolio-db';
const STORES_NAMES = ['projects', 'contactForm'];

// Ensure IndexedDB runs only in the browser
const isBrowser = typeof window !== 'undefined';

export const dbPromise = isBrowser
    ? openDB(DB_NAME, 1, {
          upgrade(db) {
              for (const STORE_NAME of STORES_NAMES) {
                  if (!db.objectStoreNames.contains(STORE_NAME)) {
                      db.createObjectStore(STORE_NAME, { keyPath: 'id' });
                  }
              }
          },
      })
    : Promise.resolve(null);

// SAVE
export async function saveToIndexedDB<K extends keyof StoresMap>(
    data: StoresMap[K],
    store: K
): Promise<{ success: true | false; msg: string }> {
    const db = await dbPromise;
    if (!db) return { success: false, msg: 'IndexedDB not available!' };

    if (!db.objectStoreNames.contains(store)) {
        // Ensure store exists
        return { success: false, msg: `${store} -store not Found!` };
    }

    const tx = db.transaction(store, 'readwrite');
    const storeObj = tx.objectStore(store);

    await storeObj.clear(); // Clear old data before saving new

    if (Array.isArray(data)) {
        for (const item of data) {
            if (!('id' in item)) {
                console.warn('Missing id for item, IndexedDB requires it:', item);
                continue;
            }
            storeObj.put(item);
        }
    } else {
        storeObj.put(data);
    }

    await tx.done;
    return { success: true, msg: `${store} cached locally` };
}

// GET
export async function getFromIndexedDB<K extends keyof StoresMap>(
    store: K
): Promise<{ success: true; data: StoresMap[K] } | { success: false; msg: string }> {
    const db = await dbPromise;
    if (!db) return { success: false, msg: 'IndexedDB not available!' };

    if (!db.objectStoreNames.contains(store)) {
        // Ensure store exists
        return { success: false, msg: `${store} -store not Found!` };
    }

    const all = await db.getAll(store);
    return { success: true, data: all as StoresMap[K] };
}

// CLEAR
export async function clearAllInIndexedDB<K extends keyof StoresMap>(store: K) {
    const db = await dbPromise;
    if (!db) return { success: false, msg: 'IndexedDB not available!' };

    const tx = db.transaction(store, 'readwrite');
    await tx.objectStore(store).clear();
    await tx.done;

    return { success: true, msg: `${store} -Cleared All!` };
}
