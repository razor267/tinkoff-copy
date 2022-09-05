import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Alert } from 'react-native'
import { db } from '../../../firebase'
import { useAuth } from '../../../hooks/useAuth'

export const useUpdateProfile = (name: string, docId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [err, setErr] = useState<Error | null>(null);
  
  const {user} = useAuth()

  const updateProfile= async () => {
    setIsLoading(true)
    try {
      if (!user) return    
      const docRef = doc(db, 'users', docId)

      await updateDoc(docRef, {
        displayName: name
      })
      setIsSuccess(true)
      setTimeout(()=> {
        setIsLoading(false)
      },3000)
    } catch (error) {
      if (error instanceof Error) {
        setErr(error)
      }
      Alert.alert('Error update profile', err?.message)
    }
    finally {
      setIsLoading(false)
    }
  }
  return {isLoading, isSuccess, updateProfile}
}
