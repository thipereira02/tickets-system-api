export class Ticket {
  constructor(
    public readonly id: string,
    public readonly eventId: string,
    public readonly userId: string,
    public readonly status: 'reserved' | 'paid' | 'canceled' = 'reserved',
    public readonly createdAt: Date = new Date(),
  ) {}

  isValid(): boolean {
    return this.status === 'paid';
  }

  static create(eventId: string, userId: string): Ticket {
    const id = crypto.randomUUID();
    return new Ticket(id, eventId, userId);
  }
}
