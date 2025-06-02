"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface JoinModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  formData: {
    nome: string
    email: string
    telefone: string
    idade: string
  }
  formSubmitted: boolean
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function JoinModal({
  open,
  onOpenChange,
  formData,
  formSubmitted,
  onInputChange,
  onSubmit,
}: JoinModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-white to-red-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Junte-se ao JUSC
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para fazer parte da nossa comunidade de jovens.
          </DialogDescription>
        </DialogHeader>

        {!formSubmitted ? (
          <form onSubmit={onSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-gray-700">
                  Nome completo
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={onInputChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="border-red-200 focus:border-red-400 focus:ring-red-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onInputChange}
                  placeholder="seu@email.com"
                  required
                  className="border-red-200 focus:border-red-400 focus:ring-red-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-gray-700">
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={onInputChange}
                    placeholder="(00) 00000-0000"
                    className="border-red-200 focus:border-red-400 focus:ring-red-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idade" className="text-gray-700">
                    Idade
                  </Label>
                  <Input
                    id="idade"
                    name="idade"
                    type="number"
                    min="15"
                    max="30"
                    value={formData.idade}
                    onChange={onInputChange}
                    placeholder="Sua idade"
                    className="border-red-200 focus:border-red-400 focus:ring-red-400"
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-gray-300">
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              >
                Enviar inscrição
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Inscrição enviada com sucesso!</h3>
            <p className="text-gray-600">Obrigado por se juntar ao JUSC! Entraremos em contato em breve.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
