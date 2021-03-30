import { Entity, World } from 'uecs'

import { Appearance, Position, Velocity } from '@/engine/core/components';
import { FPSCounterSystem, MovementSystem, RendererSystem } from '@/engine/core/systems';
import { getRandomCharacter, getRandomColor, getRandomFloat, getRandomInt } from '@/engine/utils';

export class Game {
    private _lastTime: number = null
    private _rendererContext: CanvasRenderingContext2D = null
  
    private _game: World = null
    private _entities: Entity[] = []
    
    constructor(canvas: HTMLCanvasElement) {
      this._run = this._run.bind(this)
      this._rendererContext = canvas.getContext("2d")
  
      // resize and clear the canvas
      if (this._rendererContext.canvas.width !== this._rendererContext.canvas.clientWidth || this._rendererContext.canvas.height !== this._rendererContext.canvas.clientHeight) {
        this._rendererContext.canvas.width = this._rendererContext.canvas.clientWidth;
        this._rendererContext.canvas.height = this._rendererContext.canvas.clientHeight;
      }
  
      this._game = new World()
  
      for (let i = 0; i < 400; i++) {
        this._entities.push(
        this._game.create(
          new Appearance(getRandomCharacter(), getRandomColor()),
          new Position(getRandomInt(0,this._rendererContext.canvas.width), getRandomInt(0,this._rendererContext.canvas.height)),
          new Velocity(getRandomFloat(-1,1) * 0.3, getRandomFloat(-1,1) * 0.3)
        ))
      }
    }
  
    public start() {
      this._lastTime = performance.now()
      this._run()
    }
  
    private _run() {
      // Compute time and update world
      var time = performance.now()
      
      MovementSystem(this._game, time - this._lastTime, this._rendererContext.canvas.width, this._rendererContext.canvas.height)
      RendererSystem(this._game, this._rendererContext)
    //   FPSCounterSystem(time - this._lastTime)
  
      // Update last time and request next frame
      this._lastTime = time;
      requestAnimationFrame(this._run)
    }
}