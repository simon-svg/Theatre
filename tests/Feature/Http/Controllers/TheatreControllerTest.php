<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Theatre;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class TheatreControllerTest extends TestCase
{
    /**
     *
     * @return void
     */
    public function test_user_can_not_see_theatres(): void
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);
        Theatre::factory(2)->create();

        $response = $this->getJson('/admin/theatre');
        $response->assertStatus(302);
    }

    /**
     *
     * @return void
     */
    public function test_admin_theatres_index(): void
    {
        $user = User::factory()->create();
        $user->role = 'admin';
        Sanctum::actingAs($user);
        Theatre::factory(2)->create();

        $response = $this->getJson('/admin/theatre');
        $response->assertStatus(200);
    }

    /**
     *
     * @return void
     */
    public function test_admin_theatres_create(): void
    {
        $user = User::factory()->create();
        $user->role = 'admin';
        Sanctum::actingAs($user);

        $response = $this->getJson('/admin/theatre/create');
        $response->assertStatus(200);
    }

    /**
     *
     * @return void
     */
    public function test_admin_theatres_store(): void
    {
        $user = User::factory()->create();
        $user->role = 'admin';
        Sanctum::actingAs($user);

        $response = $this->postJson('/admin/theatre', [
            'name' => 'New Theatre',
            'date' => '2022-07-22T20:30',
            'image' => UploadedFile::fake()->create('test.img', 1024),
        ]);

        $theatre = DB::table('theatres')
            ->where('name', '=', 'New Theatre')
            ->where('date', '=', '2022-07-22T20:30')->first();
        Storage::delete($theatre->image);
        $response->assertStatus(302);
    }

    /**
     *
     * @return void
     */
    public function test_admin_theatres_edit(): void
    {
        $user = User::factory()->create();
        $user->role = 'admin';
        Sanctum::actingAs($user);

        $theatre = DB::table('theatres')
            ->where('name', '=', 'New Theatre')
            ->where('date', '=', '2022-07-22T20:30')->first();

        $response = $this->getJson("/admin/theatre/$theatre->id/edit");
        $response->assertStatus(200);
    }

    /**
     *
     * @return void
     */
    public function test_admin_theatres_update(): void
    {
        $user = User::factory()->create();
        $user->role = 'admin';
        Sanctum::actingAs($user);

        $theatre = DB::table('theatres')
            ->where('name', '=', 'New Theatre')
            ->where('date', '=', '2022-07-22T20:30')->first();

        $response = $this->putJson("/admin/theatre/$theatre->id", [
            'name' => 'Updated Theatre',
            'date' => '2050-07-22T20:30',
            'imageHidden' => UploadedFile::fake()->create('updated.img', 1024),
        ]);
        $response->assertStatus(302);
    }

    /**
     *
     * @return void
     */
    public function test_admin_theatres_delete(): void
    {
        $user = User::factory()->create();
        $user->role = 'admin';
        Sanctum::actingAs($user);

        $theatre = DB::table('theatres')
            ->where('name', '=', 'Updated Theatre')->first();

        $response = $this->deleteJson("/admin/theatre/$theatre->id");

        $response->assertStatus(302);
    }
}
