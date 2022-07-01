<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'company' => $this->faker->company(),
            'date' => $this->faker->dateTimeBetween('-1 month', '+1 month'),
            'players' => $this->faker->numberBetween(1,8),
            'private' => true,
            'room' => $this->faker->numberBetween(1,2)
        ];
    }
}
