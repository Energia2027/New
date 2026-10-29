// Electricity generation data, 2000–2024 (TWh).
// Source: Our World in Data energy dataset (github.com/owid/energy-data), based on Ember and the
// Energy Institute Statistical Review of World Energy. Extracted 29 Oct 2026.
// "Geothermal" is OWID's "other renewables excluding bioenergy", which in these countries is almost entirely geothermal.

export const energySource = {
  name: "Our World in Data — Energy dataset (Ember; Energy Institute Statistical Review of World Energy)",
  url: "https://github.com/owid/energy-data",
  year: 2024,
};

export type SourceKey = "geothermal" | "hydro" | "wind" | "solar" | "bioenergy" | "fossil";

export const sources: { key: SourceKey; label: string; color: string }[] = [
  { key: "geothermal", label: "Geothermal", color: "#eb6834" },
  { key: "hydro", label: "Hydro", color: "#2a78d6" },
  { key: "wind", label: "Wind", color: "#1baf7a" },
  { key: "solar", label: "Solar", color: "#eda100" },
  { key: "bioenergy", label: "Bioenergy", color: "#008300" },
  { key: "fossil", label: "Fossil fuels", color: "#6250d6" },
];

// Kenya electricity generation by source, TWh.
export const kenyaBySource: ({ year: number } & Record<SourceKey, number>)[] = [
  { year: 2000, geothermal: 0.43, hydro: 1.31, wind: 0.00, solar: 0.00, bioenergy: 0.00, fossil: 2.57 },
  { year: 2001, geothermal: 0.48, hydro: 2.38, wind: 0.00, solar: 0.00, bioenergy: 0.00, fossil: 1.95 },
  { year: 2002, geothermal: 0.39, hydro: 3.09, wind: 0.00, solar: 0.00, bioenergy: 0.47, fossil: 1.20 },
  { year: 2003, geothermal: 0.79, hydro: 3.23, wind: 0.00, solar: 0.00, bioenergy: 0.47, fossil: 0.99 },
  { year: 2004, geothermal: 1.03, hydro: 2.84, wind: 0.00, solar: 0.00, bioenergy: 0.47, fossil: 1.82 },
  { year: 2005, geothermal: 1.00, hydro: 3.00, wind: 0.00, solar: 0.00, bioenergy: 0.47, fossil: 2.23 },
  { year: 2006, geothermal: 1.01, hydro: 3.24, wind: 0.00, solar: 0.00, bioenergy: 0.47, fossil: 2.79 },
  { year: 2007, geothermal: 1.02, hydro: 3.45, wind: 0.00, solar: 0.00, bioenergy: 0.47, fossil: 1.73 },
  { year: 2008, geothermal: 1.18, hydro: 2.82, wind: 0.00, solar: 0.00, bioenergy: 0.47, fossil: 1.68 },
  { year: 2009, geothermal: 1.34, hydro: 2.15, wind: 0.01, solar: 0.00, bioenergy: 0.47, fossil: 2.58 },
  { year: 2010, geothermal: 1.45, hydro: 3.39, wind: 0.02, solar: 0.00, bioenergy: 0.47, fossil: 1.83 },
  { year: 2011, geothermal: 1.50, hydro: 3.42, wind: 0.02, solar: 0.01, bioenergy: 0.47, fossil: 2.41 },
  { year: 2012, geothermal: 1.58, hydro: 4.26, wind: 0.01, solar: 0.01, bioenergy: 0.47, fossil: 1.84 },
  { year: 2013, geothermal: 1.91, hydro: 3.91, wind: 0.01, solar: 0.03, bioenergy: 0.47, fossil: 1.75 },
  { year: 2014, geothermal: 3.21, hydro: 3.28, wind: 0.02, solar: 0.05, bioenergy: 0.47, fossil: 2.17 },
  { year: 2015, geothermal: 4.48, hydro: 3.75, wind: 0.06, solar: 0.05, bioenergy: 0.47, fossil: 1.00 },
  { year: 2016, geothermal: 4.69, hydro: 3.31, wind: 0.06, solar: 0.06, bioenergy: 0.52, fossil: 1.04 },
  { year: 2017, geothermal: 4.76, hydro: 3.17, wind: 0.06, solar: 0.07, bioenergy: 0.70, fossil: 2.07 },
  { year: 2018, geothermal: 5.13, hydro: 3.99, wind: 0.38, solar: 0.09, bioenergy: 0.16, fossil: 1.55 },
  { year: 2019, geothermal: 5.24, hydro: 3.21, wind: 1.56, solar: 0.09, bioenergy: 0.15, fossil: 1.31 },
  { year: 2020, geothermal: 5.06, hydro: 4.23, wind: 1.33, solar: 0.09, bioenergy: 0.22, fossil: 0.75 },
  { year: 2021, geothermal: 5.04, hydro: 3.67, wind: 1.99, solar: 0.17, bioenergy: 0.25, fossil: 1.26 },
  { year: 2022, geothermal: 5.52, hydro: 3.04, wind: 2.14, solar: 0.42, bioenergy: 0.26, fossil: 1.58 },
  { year: 2023, geothermal: 6.03, hydro: 2.67, wind: 2.01, solar: 0.58, bioenergy: 0.20, fossil: 1.31 },
  { year: 2024, geothermal: 6.00, hydro: 3.10, wind: 2.17, solar: 0.66, bioenergy: 0.20, fossil: 1.13 },
];

// Share of electricity generation by source in 2024, % (computed from TWh).
export const mix2024: ({ country: string } & Record<SourceKey, number>)[] = [
  { country: "Kenya", geothermal: 45.2, hydro: 23.4, wind: 16.4, solar: 5.0, bioenergy: 1.5, fossil: 8.5 },
  { country: "Ethiopia", geothermal: 0.1, hydro: 96.9, wind: 2.8, solar: 0.2, bioenergy: 0.0, fossil: 0.0 },
  { country: "Uganda", geothermal: 0.0, hydro: 86.1, wind: 0.0, solar: 2.9, bioenergy: 8.1, fossil: 2.9 },
  { country: "Rwanda", geothermal: 0.0, hydro: 46.0, wind: 0.0, solar: 3.5, bioenergy: 0.0, fossil: 50.4 },
  { country: "Tanzania", geothermal: 0.0, hydro: 31.7, wind: 0.0, solar: 0.5, bioenergy: 0.8, fossil: 67.1 },
];

// Total electricity generation, TWh.
export const generationGrowth = [
  { country: "Ethiopia", y2000: 1.69, y2024: 25.20 },
  { country: "Kenya", y2000: 4.31, y2024: 13.26 },
  { country: "Tanzania", y2000: 2.50, y2024: 8.84 },
  { country: "Uganda", y2000: 1.59, y2024: 5.81 },
  { country: "Rwanda", y2000: 0.16, y2024: 1.13 },
];
