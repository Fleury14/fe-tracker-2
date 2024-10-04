'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function entrySubmit(formData: FormData) {

  const flags = formData.get("flags");
  const bgColor = formData.get("bg-color");
  // const flagString:string = flags?.toString() || "";
  // const flagSlug = Buffer.from(flagString, 'base64')

  revalidatePath('/tracker');
  redirect(`/tracker?flags=${flags}&bgColor=${bgColor}`);

}