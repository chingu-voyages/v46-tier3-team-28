import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

export function nameToInitials(name: string) {
  if (!name.length) {
    return null;
  }
  const nameArray = name.split(' ');
  const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
  const lastNameInitial = nameArray[nameArray.length - 1].charAt(0).toUpperCase();

  return firstNameInitial + lastNameInitial;
}
