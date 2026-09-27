import { useMemo } from "react";
import { schools as allSchools } from "../../../mock/schools";

export default function useSchool(schoolId) {
  const school = useMemo(
    () => allSchools.find((s) => s.id === schoolId) || null,
    [schoolId]
  );

  // Extended details — in real API these come with the school payload
  const details = useMemo(() => {
    if (!school) return null;
    return {
      ...school,
      staff: 48,
      parents: 3800,
      renewalAt: "2027-09-30",
      monthlyRevenue: 24999,
      address: "Sector 45, Mathura Road, New Delhi - 110044",
      phone: "+91 11 2345 6789",
      email: "office@dps.edu",
      website: "https://dps.edu",
      principal: "Dr. R. K. Sharma",
      registrationNo: "DEL/2005/12045",
      affiliationNo: "2730012",
      activeSession: "2025-26",
    };
  }, [school]);

  return { school: details, loading: false, error: null };
}