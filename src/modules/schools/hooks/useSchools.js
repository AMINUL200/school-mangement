import { useMemo, useState } from "react";
import { schools as allSchools, schoolStats } from "../../../mock/schools";
import { matchesQuery } from "../utils/schoolHelpers";

export default function useSchools() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [plan, setPlan] = useState("all");
  const [state, setState] = useState("all");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => {
    return allSchools.filter((s) => {
      if (!matchesQuery(s, query)) return false;
      if (status !== "all" && s.status !== status) return false;
      if (plan !== "all" && s.plan !== plan) return false;
      if (state !== "all" && s.state !== state) return false;
      return true;
    });
  }, [query, status, plan, state]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  const states = useMemo(
    () => Array.from(new Set(allSchools.map((s) => s.state))).sort(),
    []
  );

  const reset = () => {
    setQuery("");
    setStatus("all");
    setPlan("all");
    setState("all");
    setPage(1);
  };

  return {
    // data
    schools: pageItems,
    stats: schoolStats,
    states,
    // filters
    query, setQuery: (v) => { setQuery(v); setPage(1); },
    status, setStatus: (v) => { setStatus(v); setPage(1); },
    plan, setPlan: (v) => { setPlan(v); setPage(1); },
    state, setState: (v) => { setState(v); setPage(1); },
    reset,
    // pagination
    page, setPage, pages, total, perPage,
  };
}