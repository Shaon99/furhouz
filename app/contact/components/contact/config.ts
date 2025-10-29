export type Field =
  | { name: string; placeholder: string; type?: "text" | "email" | "tel" | "number"; span?: 1 | 2 }
  | { name: string; placeholder: string; textarea: true; rows?: number; span?: 1 | 2 };

export type Variant = {
  title: string;
  fields: Field[];
  submitText?: string;
};

export const CONTACT_VARIANTS: Record<string, Variant> = {
  owner: {
    title: "Partner with us",
    fields: [
      { name: "full_name", placeholder: "Full Name" },
      { name: "phone", placeholder: "Phone", type: "tel" },
      { name: "email", placeholder: "Email", type: "email" },
      { name: "city", placeholder: "City" },
      { name: "area", placeholder: "Area" },
      { name: "address", placeholder: "Address", span: 1 },
      { name: "zip", placeholder: "Zip Code" },
      { name: "total_sqm", placeholder: "Total Sqm*", type: "number" },
      { name: "bed_rooms", placeholder: "Bed Rooms", type: "number" },
      { name: "bath_rooms", placeholder: "Bath Rooms", type: "number" },
      { name: "parking", placeholder: "Parking" },
      { name: "rental_value", placeholder: "Rental Value" },
      { name: "remark", placeholder: "Remark", textarea: true, rows: 4, span: 2 },
    ],
  },

  corporate: {
    title: "Request a quote",
    fields: [
      { name: "full_name", placeholder: "Full Name", span: 2 },
      { name: "phone", placeholder: "Phone", type: "tel", span: 2 },
      { name: "work_mail", placeholder: "Work Mail", type: "email", span: 2 },
      { name: "company", placeholder: "Company", span: 2 },
      { name: "message", placeholder: "Message", textarea: true, rows: 4, span: 2 },
    ],
  },

  tenant: {
    title: "Tenant Form",
    fields: [
      { name: "full_name", placeholder: "Full Name" },
      { name: "phone", placeholder: "Phone", type: "tel" },
      { name: "email", placeholder: "Email", type: "email" },
      { name: "apartment", placeholder: "Apartment" },
      { name: "comment", placeholder: "Comment", textarea: true, rows: 4, span: 2 },
    ],
  },

  "want-know": {
    title: "Send us a message!",
    fields: [
      { name: "full_name", placeholder: "Full Name", span: 2 },
      { name: "phone", placeholder: "Phone", type: "tel", span: 2 },
      { name: "email", placeholder: "Email", type: "email", span: 2 },
      { name: "comment", placeholder: "Comment", textarea: true, rows: 4, span: 2 },
    ],
  },
};
