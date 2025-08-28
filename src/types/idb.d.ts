// types/idb.ts
import { Project } from "./project";

export interface ContactForm {
  id: number,
  body: {
    name: string,
    email: string,
    message: string
  },
  url: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  headers: Record<string, string>;
}

export type StoresMap = {
  projects: Project[];
  contactForm: ContactForm;
};
