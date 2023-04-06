import { promises } from 'dns';

/**
 * Fetch the guest details
 * @param fullName
 * @returns
 */
export async function getGuest(fullName: string) {
  const trimmedName = fullName.trim();

  const response = await fetch(
    `/api/guests/${encodeURIComponent(trimmedName.toLowerCase()) || 'wrong'}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
  );

  return response.json();
}

/**
 * Update the RSVP status of the guest
 * @param fullName
 * @returns
 */
export async function updateGuest(fullName: string, rsvpDecision: boolean) {
  const trimmedName = fullName.trim();

  const response = await fetch(
    `/api/guests/${encodeURIComponent(trimmedName.toLowerCase()) || 'wrong'}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rsvp: rsvpDecision }),
      method: 'PATCH',
    },
  );

  return response.json();
}
