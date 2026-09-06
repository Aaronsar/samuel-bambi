"use client";

import { useMemo, useState } from "react";
import { dates, type ShowDate } from "@/lib/content";

function groupByMonth(list: ShowDate[]) {
  const groups: { month: string; items: ShowDate[] }[] = [];
  for (const date of list) {
    const last = groups[groups.length - 1];
    if (!last || last.month !== date.month) {
      groups.push({ month: date.month, items: [date] });
    } else {
      last.items.push(date);
    }
  }
  return groups;
}

export default function DatesList() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return dates;
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const boundary = new RegExp(`(^|[^a-zà-ÿ0-9])${escaped}([^a-zà-ÿ0-9]|$)`, "i");
    return dates.filter((d) =>
      boundary.test(`${d.city} ${d.venue} ${d.dept}`),
    );
  }, [query]);
  const groups = groupByMonth(filtered);

  return (
    <div>
      <label className="mb-6 flex max-w-md items-center gap-3 border-2 border-ink bg-paper px-3 py-2">
        <span className="font-display text-lg tracking-widest uppercase opacity-60">Ville</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nice, Lille, La Cigale…"
          className="w-full bg-transparent text-base outline-none placeholder:opacity-40"
        />
      </label>

      {groups.length === 0 ? (
        <p className="font-serif text-xl italic">
          Pas de date par là. Écris-moi sur Insta, on trouvera une salle plus proche.
        </p>
      ) : (
        groups.map((group) => (
          <section key={group.month} className="mb-8">
            <h3 className="font-display mb-1 text-2xl tracking-[0.12em] text-red uppercase">
              {group.month}
            </h3>
            <ul>
              {group.items.map((date) => (
                <li key={date.id} className="dates-row">
                  <time dateTime={date.iso} className="font-display text-lg tracking-wide uppercase opacity-70">
                    {date.dateLabel}
                  </time>
                  <div className="city">
                    <p className="font-display text-[1.85rem] leading-none tracking-wide uppercase md:text-[2.1rem]">
                      {date.city}
                      {date.featured ? (
                        <span className="ml-2 align-middle text-sm tracking-[0.14em] text-red">
                          ★
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-1 text-sm opacity-70">
                      {date.venue} · {date.dept}
                    </p>
                  </div>
                  <div className="cta">
                    {date.soldOut ? (
                      <span className="font-display inline-block border-2 border-ink px-3 py-2 text-sm tracking-widest uppercase opacity-50">
                        Complet
                      </span>
                    ) : (
                      <a
                        href={date.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ticket text-sm md:text-base"
                      >
                        Une place
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
