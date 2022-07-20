<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request)
    {
        $booking = Booking::create([
           'user_id' => $request->user_id,
           'theatre_id' => $request->theatre_id
        ]);
        if ($booking) {
            return redirect()->back(['message' => 'Theatre booked successfully']);
        }
        return redirect()->back(['message' => 'something went wrong']);
    }
}
