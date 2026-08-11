import { site } from "../lib/site";

// Trinidad & Tobago flag as a diagonal ribbon: red field, white-edged black band.
const flagRibbon =
  "linear-gradient(130deg, #CE1126 0 44%, #FFFFFF 44% 47%, #1A1A1A 47% 56%, #FFFFFF 56% 59%, #CE1126 59% 100%)";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="order" className="bg-text text-white">
      <div className="h-8 w-full" style={{ background: flagRibbon }} />

      {/* Main content: two columns, kept thin */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2">
        {/* Left: brand and tagline */}
        <div className="flex flex-col gap-3">
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="max-w-xs text-sm text-white/50">
            West Indian food from Trinidad and Tobago, made fresh in Boston for
            thirty years.
          </p>
        </div>

        {/* Right: per-location ordering + explore */}
        <div className="flex flex-wrap gap-x-10 gap-y-6 md:justify-end">
          {site.locations.map(
            (loc) =>
              (loc.ordering.doordash || loc.ordering.grubhub) && (
                <div key={loc.name}>
                  <p className="mb-3 text-xs uppercase tracking-widest text-accent-warm">
                    Order · {loc.name}
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    {loc.ordering.doordash && (
                      <a
                        href={loc.ordering.doordash}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 transition-colors hover:text-white"
                      >
                        DoorDash
                      </a>
                    )}
                    {loc.ordering.grubhub && (
                      <a
                        href={loc.ordering.grubhub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 transition-colors hover:text-white"
                      >
                        Grubhub
                      </a>
                    )}
                  </div>
                </div>
              ),
          )}

          {/* <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-accent-warm">
              Explore
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#menu"
                className="text-white/70 transition-colors hover:text-white"
              >
                Menu
              </a>
              <a
                href="#locations"
                className="text-white/70 transition-colors hover:text-white"
              >
                Locations
              </a>
              <a
                href={site.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom bar: copyright + built-by credit */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-white/40 sm:flex-row">
          <span>
            &copy; {year} {site.name}. All rights reserved.
          </span>
          <span>
            Designed &amp; built by{" "}
            <a
              href="https://evanboodoosingh.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-warm transition-opacity hover:opacity-70"
            >
              Evan Boodoosingh
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}