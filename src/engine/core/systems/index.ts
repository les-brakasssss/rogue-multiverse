import type { World } from 'uecs';

import { Appearance, InputState, Position, SimpleGamepadState, Velocity } from '@/engine/core/components';

function scanGamepads(gamePadState: SimpleGamepadState, inputState: InputState) {
  navigator.getGamepads().forEach(gamepad => {
    if (gamepad.axes) {
      if (gamepad.axes.length >= 2) {
        // Scan X
        {
          if (gamepad.axes[0] < -gamePadState.axis_threshold) {
            inputState.states.left = true
            inputState.states.right = false
            return
          }
          if (gamepad.axes[0] > gamePadState.axis_threshold) {
            inputState.states.left = false
            inputState.states.right = true
            return
          }
          inputState.states.left = false
          inputState.states.right = false
        }
        // Scan Y
        {
          if (gamepad.axes[1] < -gamePadState.axis_threshold) {
            inputState.states.up = false
            inputState.states.down = true
            return
          }
          if (gamepad.axes[1] > gamePadState.axis_threshold) {
            inputState.states.up = true
            inputState.states.down = false
            return
          }
          inputState.states.up = false
          inputState.states.down = false
        }
      }
    }
  })
}

export function InputSystem(world: World) {
  world.view(SimpleGamepadState, InputState).each((entity, gamePadState, inputState) => {
    scanGamepads(gamePadState, inputState)
  });
}

export function MovementSystem(world: World, dt: number, width: number, height: number) {
  world.view(Position, Velocity).each((entity, position, velocity) => {
    position.x += velocity.vx * dt;
    position.y += velocity.vy * dt;
    if (position.x < 0) position.x = width
    if (position.x > width) position.x = 0
    if (position.y < 0) position.y = height
    if (position.y > height) position.y = 0
  });
}

export function RendererSystem(world: World, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  world.view(Position, Velocity, Appearance).each((entity, position, velocity, appearance) => {
    if (position.x < 0 || position.x > ctx.canvas.width || position.y < 0 || position.y > ctx.canvas.height)
      return
    ctx.save()
    ctx.font = "32px 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    // ctx.fillStyle = appearance.color
    ctx.translate(position.x, position.y)
    ctx.rotate(Math.atan2(velocity.vy, velocity.vx))
    ctx.translate(-position.x, -position.y)
    ctx.fillText(appearance.character, position.x, position.y)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.restore()
  });
}

let iterations: number = 0
let sum: number = 0
export function FPSCounterSystem(dt: number) {
  iterations++
  sum += dt != 0 ? 1000 / dt : dt
  document.getElementById("debug-ui").innerText = `FPS: ${Math.round(sum / iterations)} (${Math.round(1000 / dt)})`
}