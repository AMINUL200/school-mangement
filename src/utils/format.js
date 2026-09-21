export function formatCurrency(value, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

export function formatDate(value) {
  if (!value) return '—';
  return new Date(value).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function formatDateTime(value) {
  if (!value) return '—';
  return new Date(value).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function initials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

export function csvEscape(value) {
  const s = String(value ?? '');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replaceAll('"', '""')}"`;
  }
  return s;
}

export function exportCsv(filename, rows, columns) {
  const header = columns.map((c) => csvEscape(c.header)).join(',');
  const body = rows
    .map((row) => columns.map((c) => csvEscape(typeof c.accessor === 'function' ? c.accessor(row) : row[c.accessor])).join(','))
    .join('\n');
  const blob = new Blob([`${header}\n${body}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function printHtml(title, html) {
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(`<!doctype html><html><head><title>${title}</title>
    <style>
      body{font-family:Inter,system-ui,sans-serif;padding:24px;color:#0f172a}
      table{width:100%;border-collapse:collapse}
      th,td{border:1px solid #e2e8f0;padding:8px;text-align:left;font-size:12px}
      h1{font-size:20px}
    </style>
  </head><body>${html}</body></html>`);
  win.document.close();
  win.focus();
  win.print();
}

export function delay(ms = 350) {
  return new Promise((r) => setTimeout(r, ms));
}

export function paginate(items, page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  return {
    data: items.slice(start, start + pageSize),
    total: items.length,
    page,
    pageSize,
    totalPages: Math.max(1, Math.ceil(items.length / pageSize)),
  };
}

export function searchFilter(items, query, fields) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return items;
  return items.filter((item) =>
    fields.some((f) => String(item[f] ?? '').toLowerCase().includes(q))
  );
}
