import { create } from "zustand"

interface ContractData {
  clientName: string
  contractorName: string
  jobDescription: string
  amount: string
  estimatedTime: string
  phone: string
  email: string
  companyName: string
  date: string
}

interface ContractState {
  contract: ContractData
  updateField: (field: keyof ContractData, value: string) => void
  resetContract: () => void
}

export const useContractStore = create<ContractState>()((set) => ({
  contract: {
    clientName: "",
    contractorName: "",
    jobDescription: "",
    amount: "",
    estimatedTime: "",
    phone: "",
    email: "",
    companyName: "",
    date: "",
  },
  updateField: (field, value) =>
    set((state) => ({
      contract: {
        ...state.contract,
        [field]: value,
      },
    })),
  resetContract: () =>
    set(() => ({
      contract: {
        clientName: "",
        contractorName: "",
        jobDescription: "",
        amount: "",
        estimatedTime: "",
        phone: "",
        email: "",
        companyName: "",
        date: "",
      },
    })),
}))

