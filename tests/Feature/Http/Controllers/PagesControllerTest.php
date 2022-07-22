<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Theatre;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class PagesControllerTest extends TestCase
{
    /**
     *
     * @return void
     */
    public function test_get_theatres(): void
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);
        Theatre::factory(2)->create();

        $response = $this->getJson('/');
        $response->assertStatus(200);
    }
}
