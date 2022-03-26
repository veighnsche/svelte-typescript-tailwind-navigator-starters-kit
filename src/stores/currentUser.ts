import {writable} from 'svelte/store';

// todo: developer should replace unknown and with own UserType
//                                  vvvvvvv
export const currentUser = writable<unknown | null>(null);

export async function login(user: unknown) {
  currentUser.set(user);
  return;
}

export function logout() {
  currentUser.set(null);
}