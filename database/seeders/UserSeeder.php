<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
                'name' => 'Admin',
                'email' => 'admin@admin.loc',
                'role' => 'admin',
                'password' => Hash::make('1234567'),
            ],
            [
                'name' => 'Test',
                'email' => 'test@test.test',
                'role' => 'user',
                'password' => Hash::make('testtest'),
            ],
        ]);
    }
}
