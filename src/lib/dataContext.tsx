import React, { createContext, useState, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type DataState = {}

const defaultDataState: DataState = {}

const DataContext = createContext<
  [
    DataState,
    React.Dispatch<React.SetStateAction<DataState>>,
  ]
>(
  [
    defaultDataState,
    () => { }
  ]
)

const DataProvider: React.FC<Props> = ({ children }) => {

  const [dataState, setDataState] = useState<DataState>(defaultDataState)
  return (
    <DataContext.Provider value={[dataState, setDataState]}>
      {children}
    </DataContext.Provider>
  )
}


export { DataContext, DataProvider }