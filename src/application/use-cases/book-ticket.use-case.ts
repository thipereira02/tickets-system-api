import { Injectable } from '@nestjs/common';
import { TicketRepository } from '../../domain/repositories/ticket.repository';
import { Ticket } from '../../domain/entities/ticket.entity';

export interface BookTicketInput {
  eventId: string;
  userId: string;
}

export interface BookTicketOutput {
  ticketId: string;
  status: string;
}

@Injectable()
export class BookTicketUseCase {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async execute(input: BookTicketInput): Promise<BookTicketOutput> {
    const ticket = Ticket.create(input.eventId, input.userId);

    await this.ticketRepository.save(ticket);

    return {
      ticketId: ticket.id,
      status: ticket.status,
    };
  }
}
