"use client"

import { useSearchParams, useRouter } from "next/navigation"

import { cn, formUrlQuery } from "@/lib/utils"

export const BankTabItem = ({ account }: BankTabItemProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const isActive = false

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: "1",
    })
    router.push(newUrl, { scroll: false })
  }

  return (
    <div
      onClick={handleBankChange}
      className={cn(`banktab-item`, {
        " border-blue-600": isActive,
      })}
    >
      <p
        className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
          " text-blue-600": isActive,
        })}
      >
        {account.name}
      </p>
    </div>
  )
}
