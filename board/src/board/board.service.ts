import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  create(board: Board): Promise<Board> {
    return this.boardRepository.save(board);
  }

  // Update and delete methods here
}
