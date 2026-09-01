import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore'

import { db } from '../lib/firebase'

export interface UserProfile {
  nom: string
  theme: 'light' | 'dark'
}

export async function createUserProfile(
  uid: string,
  profile: UserProfile,
) {
  const userRef = doc(db, 'users', uid)

  await setDoc(userRef, profile)
}

export async function getUserProfile(
  uid: string,
): Promise<UserProfile | null> {
  const userRef = doc(db, 'users', uid)
  const snapshot = await getDoc(userRef)

  if (!snapshot.exists()) {
    return null
  }

  return snapshot.data() as UserProfile
}

export async function updateUserProfile(
  uid: string,
  profile: Partial<UserProfile>,
) {
  const userRef = doc(db, 'users', uid)

  await updateDoc(userRef, profile)
}