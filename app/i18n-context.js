"use client"
import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react'
import { getDictionary } from '../get-dictionary'

const I18nContext = createContext(null)

export function I18nProvider({ lang, children }) {
  const [dict, setDict] = useState(null)
  useEffect(() => {
    getDictionary(lang).then(setDict)
  }, [lang])
  if (!dict) return null
  return <I18nContext.Provider value={{ dict, lang }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
