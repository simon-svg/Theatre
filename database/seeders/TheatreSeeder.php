<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TheatreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('theatres')->insert([
            [
                'name' => 'Theatre 1',
                'date' => '2022-07-22T20:30',
                'image' => 'theatres/td8a1d82PSmJRR71iupEYxIKLaFZzDDwwBmZMfr4.jpg',
            ],
            [
                'name' => 'Theatre 2',
                'date' => '2022-07-21T21:00',
                'image' => 'theatres/TgkPxuYbdTRgvUsj8HLXiaauzRX2vDDB8RNSR2Sq.jpg',
            ],
            [
                'name' => 'Theatre 3',
                'date' => '2022-07-23T19:25',
                'image' => 'theatres/fwW5MyNAHM94cTMV0Pdd6HVYsCbYPUhyiBrTRQy7.jpg',
            ],
            [
                'name' => 'Theatre 4',
                'date' => '2022-07-23T12:45',
                'image' => 'theatres/FbprTDcsvJJsuftXdRQ8vUOQn3txQCQ06Xy7xPsH.jpg',
            ],
            [
                'name' => 'Theatre 5',
                'date' => '2022-07-24T14:50',
                'image' => 'theatres/W5gSTjjXRuKq6dAHJ9AESaX30pV1p9QtewdRTGU2.png',
            ],
        ]);
    }
}
