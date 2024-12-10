const Routes = {
    home: "/",
    services: "/servicios",
    about: "/nosotros",
    contact: "/contacto",
} as const;

export type Route = typeof Routes[keyof typeof Routes];