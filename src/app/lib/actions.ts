'use server'

export async function entrySubmit(formData: FormData) {
  const flags = formData.get("flags")
  const bgColor = formData.get("bg-color")
    console.log(flags, bgColor);
  }