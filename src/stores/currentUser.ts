import {writable} from 'svelte/store';

// todo: developer should replace unknown and with own UserType
//                                  vvvvvvvvvv
export const currentUser = writable<unknown>({});
// export const currentUser = writable<unknown | null>(null);

// todo: developer should implement login logic
export async function login(user: unknown) {
  currentUser.set(user);
  return;
}

export function logout() {
  currentUser.set(null);
}