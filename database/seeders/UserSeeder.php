<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Simon',
                'email' => 'simon.karapetyan@esterox.am',
                'role' => 'admin',
                'password' => '$2y$10$eUY85am.RsOhT7OQXIK1n.73N8lKYi.jhDGT.i/wc6HEatI4zTGt.',
            ],
        ]);
    }
}
