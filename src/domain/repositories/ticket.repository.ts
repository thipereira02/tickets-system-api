import { Ticket } from '../entities/ticket.entity';

export abstract class TicketRepository {
  abstract save(ticket: Ticket): Promise<void>;
  abstract findById(id: string): Promise<Ticket | null>;
}
