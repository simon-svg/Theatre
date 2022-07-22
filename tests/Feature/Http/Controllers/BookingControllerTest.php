<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Booking;
use App\Models\Theatre;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class BookingControllerTest extends TestCase
{
    /**
     * @return void
     */
    public function test_booking_index()
    {
        $user = User::factory()->create();
        $user->role = 'admin';
        Sanctum::actingAs($user);

        $response = $this->getJson('/booking');
        $response->assertStatus(200);
    }

    /**
     *
     * @return void
     */
    public function test_booking_store()
    {
        $user = User::factory()->create();
        $theatre = Theatre::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->postJson('/booking/store', [
            'user_id' => $user->id,
            'theatre_id' => $theatre->id,
        ]);
        $response->assertStatus(302);
    }

    /**
     *
     * @return void
     */
    public function test_booking_clear_all()
    {
        $user = User::factory()->create();
        $user->role = 'admin';
        Sanctum::actingAs($user);

        $response = $this->getJson('/booking/clear-all');
        $response->assertStatus(302);
    }
}
