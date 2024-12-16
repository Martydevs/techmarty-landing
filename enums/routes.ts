const Routes = {
    home: "/",
    services: "/servicios",
    contact: "/contacto",
} as const;

export type Route = typeof Routes[keyof typeof Routes];