"use client"
import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react'
import { dictionaries, getDictionary } from '../get-dictionary'

const I18nContext = createContext(null)

export function I18nProvider({ lang, children }) {
  const [dicts, setDicts] = useState(Object.keys(dictionaries))
  const [dict, setDict] = useState(null)
  const [currentLang, setCurrentLang] = useState(lang)

  useEffect(() => {
    getDictionary(currentLang).then(response => {
      setDict(response)
    })
  }, [currentLang])

  if (!dict) return null

  return (
    <I18nContext.Provider value={{ dicts, dict, lang: currentLang, setLang: setCurrentLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}