"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { AlertDialog, Dialog, DropdownMenu } from "radix-ui"
import { ArrowUpRight, Ellipsis, Pencil, Trash2 } from "lucide-react"
import { deleteTrip, renameTrip } from "@/app/(app)/trips/actions"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { SubmitButton } from "@/components/ui/submit-button"

const item =
  "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm outline-none data-[highlighted]:bg-mist"
const overlay = "fixed inset-0 z-40 bg-ink/30"
const dialog =
  "fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-card bg-white p-8"

/** The "..." button on a trip card, with Open / Rename / Delete. */
export function TripMenu({ id, title }: { id: string; title: string }) {
  const [renameOpen, setRenameOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [renameError, setRenameError] = useState<string>()
  const [deleting, startDelete] = useTransition()

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            aria-label={`Options for ${title}`}
            // always visible on touch; on hover devices it appears with the card
            className="grid size-10 cursor-pointer place-items-center rounded-full bg-white text-ink transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-focus-within/card:opacity-100 [@media(hover:hover)]:group-hover/card:opacity-100 data-[state=open]:opacity-100"
          >
            <Ellipsis className="size-4" aria-hidden />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            sideOffset={8}
            className="z-30 min-w-44 rounded-2xl bg-white p-1.5 shadow-[0_12px_32px_rgba(4,69,144,0.18)]"
          >
            <DropdownMenu.Item asChild className={item}>
              <Link href={`/trips/${id}`}>
                <ArrowUpRight className="size-4" aria-hidden /> Open
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={item} onSelect={() => setRenameOpen(true)}>
              <Pencil className="size-4" aria-hidden /> Rename
            </DropdownMenu.Item>
            <DropdownMenu.Item className={`${item} text-danger`} onSelect={() => setDeleteOpen(true)}>
              <Trash2 className="size-4" aria-hidden /> Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <Dialog.Root
        open={renameOpen}
        onOpenChange={(o) => {
          setRenameOpen(o)
          if (!o) setRenameError(undefined)
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className={overlay} />
          <Dialog.Content className={dialog}>
            <Dialog.Title className="text-heading-sm">Rename trip</Dialog.Title>
            <Dialog.Description className="mt-1 mb-6 text-body-sm text-graphite">
              Only the name changes. Everything saved in it stays put.
            </Dialog.Description>
            <form
              className="grid gap-4"
              noValidate
              action={async (formData) => {
                const result = await renameTrip(id, formData)
                if (result.error) setRenameError(result.error)
                else setRenameOpen(false)
              }}
            >
              <Field label="Trip name" name="title" defaultValue={title} error={renameError} autoFocus required />
              <div className="flex flex-col gap-2 sm:flex-row-reverse">
                <SubmitButton pendingLabel="Saving">Save</SubmitButton>
                <Dialog.Close asChild>
                  <Button type="button" variant="outline" size="lg" className="w-full cursor-pointer">
                    Cancel
                  </Button>
                </Dialog.Close>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <AlertDialog.Root open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className={overlay} />
          <AlertDialog.Content className={dialog}>
            <AlertDialog.Title className="text-heading-sm">Delete {title}?</AlertDialog.Title>
            <AlertDialog.Description className="mt-1 mb-6 text-body-sm text-graphite">
              This removes the trip and everything saved in it. It can&rsquo;t be undone.
            </AlertDialog.Description>
            <div className="flex flex-col gap-2">
              <AlertDialog.Action asChild>
                <Button
                  variant="destructive"
                  size="lg"
                  className="w-full cursor-pointer"
                  disabled={deleting}
                  onClick={(e) => {
                    e.preventDefault() // keep the dialog open until the delete finishes
                    startDelete(async () => {
                      await deleteTrip(id)
                      setDeleteOpen(false)
                    })
                  }}
                >
                  {deleting ? "Deleting" : "Delete trip"}
                </Button>
              </AlertDialog.Action>
              
              <AlertDialog.Cancel asChild>
                <Button variant="outline" size="lg" className="w-full cursor-pointer">
                  Keep it
                </Button>
              </AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}
