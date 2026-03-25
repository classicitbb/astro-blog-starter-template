import type { APIRoute } from 'astro';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
	const contentType = request.headers.get('content-type') ?? '';
	if (!contentType.includes('application/json')) {
		return new Response(JSON.stringify({ error: 'Unsupported content type.' }), { status: 415 });
	}

	let payload: Record<string, unknown>;
	try {
		payload = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid JSON.' }), { status: 400 });
	}

	const website = String(payload.website ?? '').trim();
	if (website) {
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	}

	const name = String(payload.name ?? '').trim();
	const email = String(payload.email ?? '').trim().toLowerCase();
	const message = String(payload.message ?? '').trim();

	if (name.length < 2 || name.length > 80) {
		return new Response(JSON.stringify({ error: 'Name is invalid.' }), { status: 400 });
	}

	if (!emailPattern.test(email) || email.length > 120) {
		return new Response(JSON.stringify({ error: 'Email is invalid.' }), { status: 400 });
	}

	if (message.length < 20 || message.length > 2000) {
		return new Response(JSON.stringify({ error: 'Message must be 20-2000 characters.' }), {
			status: 400,
		});
	}

	// Placeholder implementation for demo purposes. Wire this to email/CRM provider in production.
	return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
